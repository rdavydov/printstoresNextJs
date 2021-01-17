import React from "react";

interface IAdminContext {
    headerView?: true;
    headerContent?: any[];
}

export const AdminLayoutContext = React.createContext<IAdminContext>({
    headerView: true,
    headerContent: [],
});
