interface JSONResponse {
  id: number;
  load: number;
}

const getData = async (id: string): Promise<number> => {
  const url: string = "http://localhost:8000/status/" + id;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const {load}: JSONResponse = await response.json();

  if (response.ok) {
    return load;
  } else {
    throw new Error("Server not found");
  }
};

export default getData;
