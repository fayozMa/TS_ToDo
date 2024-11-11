import { useEffect, useState, FormEvent } from "react";

interface Task {
  title: string;
  date: string;
}

function App() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("data");
    if (dataFromLocalStorage) {
      setData(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newData: Task = {
      title: form[0].value,
      date: form[1].value,
    };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    form.reset();
  };

  const handleDelete = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  return (
    <div className="min-h-screen bg-base-200 p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">To Do List</h1>

      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold text-primary">
                      {item.title}
                    </div>
                    <div className="text-sm text-secondary">
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">mashqlar githubda exercise fayli ichida</div>
          )}
        </div>

        <form
          onSubmit={handleAdd}
          className="bg-base-100 p-4 rounded-lg shadow-lg space-y-3"
        >
          <h3 className="text-xl font-semibold mb-2">Add your tasks</h3>
          <input
            type="text"
            placeholder="Task title"
            className="input input-bordered w-full"
            required
          />
          <input type="date" className="input input-bordered w-full" required />
          <button type="submit" className="btn btn-primary w-full">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
