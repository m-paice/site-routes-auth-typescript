interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "j12k3j12lj312l3 21kj3kl21j321kl3j 21j321kl3",
        user: {
          name: "Matheus Paice",
          email: "matheus.paice@gmail.com",
        },
      });
    }, 2000);
  });
}
