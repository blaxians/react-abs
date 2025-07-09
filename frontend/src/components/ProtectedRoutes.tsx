import { useVerifyToken } from "../utils/hooks/useVerifyToken";
import { useAuthContext } from "../utils/hooks/useCustomContext";
import { useEffect } from "react";
import useUserSlugRedirect from "../utils/hooks/useSlugRedirect";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, user } = useAuthContext();
  const verifyToken = useVerifyToken();

  useEffect(() => {
    if (!isAuth || !user) {
      (async () => {
        await verifyToken();
      })();
    }
  }, [verifyToken, isAuth, user]);

  useUserSlugRedirect();

  if (!isAuth || !user) return null;
  return children;
};

export default ProtectedRoutes;
