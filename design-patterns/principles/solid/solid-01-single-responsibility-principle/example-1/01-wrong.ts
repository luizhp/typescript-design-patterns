//https://samueleresca.net/solid-principles-using-typescript/
namespace SingleResponsibilityPrinciple1Wrong {
    class DatabaseTasks {
        public save(item: object): void { };
    }
    class Database {
        public tasks: DatabaseTasks;

        constructor() { }
        public connect(cnn: string): Database { return this; }
    }

    /*
    * THE  CLASS DOESN'T FOLLOW THE SRP PRINCIPLE
    */
    class Task {
        private db: Database;

        constructor(private title: string, private deadline: Date) {
            this.db = new Database().connect("admin:password@fakedb");
        }

        getTitle() {
            return this.title + "(" + this.deadline + ")";
        }
        save() {
            this.db.tasks.save({ title: this.title, date: this.deadline });
        }
    }
}