import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchBook from "../../SearchBook/SearchBook";
import BookForm from "../../NewBook/BookForm";

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <dib>{children}</dib>}</div>;
}

const TabsButton = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    console.log(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: "transparent",
        marginBottom: "1rem",
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        aria-label="secondary tabs example"
        textColor="secondary"
        indicatorColor="secondary"
        sx={{
          width: 300,
          // "&:hover": {
          //   color: "#77002e",
          //   opacity: 1,
          // },
          //   "& .MuiTab-root": {
          //     color: "gray",
          //     fontWeight: 400,
          //     borderRadius: "0.75rem",
          //   },
          // "& .Mui-selected": {
          //   color: "#fcb8d2",
          //   fontWeight: 400,
          //   borderRadius: "0.75rem",
          // },
          // "& .Mui-focusVisible": {
          //   backgroundColor: "#fcb8d2",
          // },
          //   "& .MuiTabs-indicator": {
          //     display: "flex",
          //     justifyContent: "center",
          //     backgroundColor: "transparent",
          //   },
          //   "& .MuiTabs-indicatorSpan": {
          //     maxWidth: 40,
          //     width: "100%",
          //     backgroundColor: "#635ee7",
          //   },
        }}
      >
        <Tab label="Search Book" />
        <Tab label="Add Book" />
      </Tabs>
      {selectedTab === 0 && <SearchBook />}
      {selectedTab === 1 && (
        <BookForm
          onSaveBookData={props.saveBookDataHandler}
          onCancel={props.cancelAddBookHandler}
        />
      )}
    </Box>
  );
};

export default TabsButton;
