import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '48rem',
    height: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down('xs')]: {
      width: '100%', 
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border: '2px solid',
    borderColor: theme.palette.grey[300],
    padding: '0.5rem',
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      padding: '0.4rem',
    },
  },
  iconButton: {
    padding: 10,
    color: theme.palette.grey[400],
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="search 19.1 million products from 152 stores in UAE"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
//import * as bunsliga from 'mui' 
export default SearchBar; 
  
 

// import React from 'react';

// const SearchBar = () => {
//   return (
//     <div className="relative rounded-md shadow-sm w-[28rem] py-4">
//       <input
//         type="text"
//         name="search"
//         id="search"
//         className="block w-full border-2 pl-2 pr-10 py-2 sm:text-sm border-gray-200 focus:outline-none"
//         // className="block w-full border-black rounded-md "
//         // className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
//         placeholder="search 19.1 million products from 152 stores in UAE"
//       />
//       <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//         <svg
//           className="h-5 w-5 text-gray-400"
//           viewBox="0 0 20 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M9 16a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
//             fill="currentColor"
//           />
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M18.707 17.293a1 1 0 01-1.414 1.414l-3.182-3.182a7 7 0 111.414-1.414l3.182 3.182z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
