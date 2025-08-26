// function delay(ms: number): Promise<string> {
//   const result: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Selesai setelah " + ms + " ms");
//     }, ms);
//   });
//   return result;
// }

// delay(3000).then(result => console.log(result));

async function fetchData<T>(url: string): Promise<T> {
  try {
    // Make the network request using the fetch API.
    const response = await fetch(url);

    // Check if the request was successful (status code 200-299).
    // If not, throw an error to be caught by the catch block.
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the response body as JSON.
    // We cast the result to the generic type 'T'.
    const data: T = await response.json();

    // Return the typed data.
    return data;
  } catch (error) {
    // Log the error to the console for debugging.
    console.error("Failed to fetch data:", error);

    // Re-throw the error so the calling code can handle it as well.
    // This is important for allowing the caller to implement its own
    // error handling logic (e.g., showing a message to the user).
    throw error;
  }
}

async function run() {
  interface Product {
    title: string;
    category: string;
  }

  interface ProductChild extends Product {
    description: string;
  }

  interface Response {
    products: ProductChild[]
  }

  let result: Response = await fetchData("https://dummyjson.com/products"); // Axios
  const titles = result.products.map((res) => res.title);
  const category = result.products.map((res) => res.category);
  const description = result.products.map((res) => res.description);
  console.log(titles); // "Selesai setelah 1000 ms"
  console.log(category); // "Selesai setelah 1000 ms"
  console.log(description); // "Selesai setelah 1000 ms"
}

run();
