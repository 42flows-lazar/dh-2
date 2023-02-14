import { AsyncQueue } from './async-queue';

 const task = async <T> (value: T) => {
     await new Promise((r) => setTimeout(r, 100 * Math.random()));
    console.log(value);
};

(async () => {
    const queue = new AsyncQueue();

    await Promise.all([
        queue.add(() => task(1)),
        queue.add(() => task(2)),
        queue.add(() => task(3)),
        queue.add(() => task(4)),
    ]);
})();