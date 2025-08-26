// [1,2,3].map(number => console.log(number))

type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

let p: ReadOnlyPerson = { name: "Budi", age: 25 };
// p.age = 30;  // ❌ Tidak bisa diubah karena readonly

// Partial
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "organize desk",
  description: "clear clutter",
  completed: true,
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Required
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: "hello" };

// Readonly
// Diatas

// Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

const todoBaru : TodoPreview = {
  title: "Clean room",
  completed: false,
};
