export class AsyncQueue {
    private previousItem = Promise.resolve();

    add<T> (task: () => T): Promise<Awaited<T>> {
        return new Promise((res, rej) => {
            this.previousItem = this.previousItem.then(async () => {
                try {
                    res(await task());
                } catch (error) {
                    rej(error);
                }
            });
        });
    }
}