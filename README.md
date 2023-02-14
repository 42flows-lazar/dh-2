Задача которую решали: Нужно было вызывать асинхронную ф-ю аля синхронно

есть источник асинхронных событий, например


const task = async <T>(value: T) => {
    await new Promise((r) => setTimeout(r, 100 * Math.random()));
    console.log(value);
};
если их вызвать одновременно то получим случайный набор чисел


await Promise.all([
    task(1),
    task(2),
    task(3),
    task(4),
]);

// 4 1 3 2
необходимо написать AsyncQueue которая сохранит последовательность


const queue = new AsyncQueue();

await Promise.all([
    queue.add(() => task(1)),
    queue.add(() => task(2)),
    queue.add(() => task(3)),
    queue.add(() => task(4)),
]);

// 1 2 3 4
