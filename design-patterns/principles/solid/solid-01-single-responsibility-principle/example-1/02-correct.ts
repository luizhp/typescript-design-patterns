//https://samueleresca.net/solid-principles-using-typescript/
namespace SingleResponsibilityPrinciple1Correct {
    class DatabaseTasks {
        public save(item: object): void { };
    }
    class Database {
        public tasks: DatabaseTasks;

        constructor() { }
        public connect(cnn: string): Database { return this; }
    }

    class Task {

        constructor(private title: string, private deadline: Date) {
        }

        getTitle() {
            return this.title + "(" + this.deadline + ")";
        }


    }

    class TaskRepository {
        private db: Database;

        constructor() {
            this.db = new Database().connect("admin:password@fakedb");
        }

        save(task: Task) {
            this.db.tasks.save({});
        }
    }
}