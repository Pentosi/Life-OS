import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import type { SignInData } from "../services/auth.service";

export function useSignIn() {
  return useMutation({
    mutationFn: async (values: SignInData) => {
      const { data, error } =
        await authService.signIn(values);

      if (error) {
        throw error;
      }

      return data;
    },
  });
}