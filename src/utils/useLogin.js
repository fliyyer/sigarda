import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem('session_sigarda');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
};
