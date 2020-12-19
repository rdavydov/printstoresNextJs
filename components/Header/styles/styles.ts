import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerItems: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  city: {
    display: "flex",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
  },
  find: {
    cursor: "pointer",
    marginRight: theme.spacing(2),
  },
  menu: {
    display: "flex",
    margin: "0 auto",
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    width: "50%",
  },
  menuItem: {
    justifyContent: "center",
  },
}));
export default useStyles;
