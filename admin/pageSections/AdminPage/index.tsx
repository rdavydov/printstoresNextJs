import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReducer";

const AdminGuard = () => {
    const { replace } = useRouter();

    const admin = useSelector((state: RootState) => state.admin);

    if (typeof window !== "undefined" && !admin.auth) {
        replace("/admin/login");
        return null;
    }

    return (
        <>
            <p>ADmin</p>
        </>
    );
};

export default AdminGuard;
