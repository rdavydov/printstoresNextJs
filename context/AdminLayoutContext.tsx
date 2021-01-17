import React from "react";

interface IAdminContext {
    headerView?: true;
    headerContent?: any[] | JSX.Element;
}

export const AdminLayoutContext = React.createContext<IAdminContext>({
    headerView: true,
    headerContent: [],
});
