import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export function RequireAuth({
  children,
  auth,
}: { auth: boolean } & PropsWithChildren) {
  return auth ? children : <Navigate to="/login" replace />;
}
