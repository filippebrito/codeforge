type LoginBody = {
  email: string;
  password: string;
};

type LoginResult = {
  accessToken: string;
};

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function login(body: LoginBody): Promise<LoginResult> {
  await wait(1500);

  return {
    accessToken: "mock-token",
  };
}