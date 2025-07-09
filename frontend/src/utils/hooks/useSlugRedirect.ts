import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "./useCustomContext";
import { convertToRoleData } from "../globals";

const useUserSlugRedirect = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user?.roleValue) return;

        const currentSlug = location.pathname.split("/")[1] || "/";
        const expectedSlug = convertToRoleData(user.roleValue);

        if (expectedSlug && expectedSlug !== currentSlug) {
            const redirectTo = convertToRoleData(expectedSlug, "string") as string;
            navigate(`/${redirectTo}`, { replace: true });
        }
    }, [location.pathname, user, navigate]);
};

export default useUserSlugRedirect;
