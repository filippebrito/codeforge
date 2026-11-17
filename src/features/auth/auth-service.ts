const API_URL = "http://localhost:8080";
const MOCK_LOGIN = false;

type LoginBody = {
  email: string;
  password: string;
};

type LoginResult = {
  accessToken: string;
};

export class LoginError extends Error {
  constructor(readonly kind: "unauthorized" | "unavailable") {
    super(kind);
  }
}

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function login(body: LoginBody): Promise<LoginResult> {
  if(MOCK_LOGIN){
    await wait(1500);
    return {
      accessToken: "mock-token",
    };
  } else {
    return loginApi(body);
  }
}

async function loginApi(body: LoginBody): Promise<LoginResult> {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
    throw new LoginError("unavailable");
  }
  if (response.status === 401) {
    console.log("unauthorized");
    throw new LoginError("unauthorized");
  }
  if (!response.ok) {
    console.log("unavailable 2");
    throw new LoginError("unavailable");
  }
  return response.json();
}