import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions"; // Adjust the path as needed
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCardIcon from "@mui/icons-material/AddCard";
import {
  IconButton,
  Box,
  TextField,
  Menu,
  MenuItem,
  Badge,
  InputAdornment,
} from "@mui/material";
import Swal from "sweetalert2";


const SingleButton = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [additionalAnchorEl, setAdditionalAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
  };

  const handlePersonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAdditionalClick = (event) => {
    setAdditionalAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseAdditionalMenu = () => {
    setAdditionalAnchorEl(null);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
    handleCloseMenu();
  };

  const handleRegisterClick = () => {
    navigate("/register");
    handleCloseMenu();
  };

  const handleMyAccountClick = () => {
    navigate("/myaccount");
    handleCloseMenu();
  };

  const handleLogoutClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        handleCloseMenu();
        Swal.fire(
          "Logged Out",
          "You have been logged out successfully.",
          "success"
        );
      }
    });
  };

  const handleComparePageClick = () => {
    navigate("/compare");
    handleAdditionalClick();
  };

  const handleWishlistPageClick = () => {
    navigate("/wishlist");
    handleAdditionalClick();
  };

  const handleCartPageClick = () => {
    navigate("/cart");
    handleAdditionalClick();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        my: 2,
        position: "relative",
      }}
    >
      {/* Search Button */}
      <IconButton
        onClick={handleSearchClick}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
        }}
      >
        <SearchIcon />
      </IconButton>
      {/* Search Bar */}
      {searchOpen && (
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            position: "absolute",
            top: "70px",
            left: "0",
            width: "300px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: 2,
            transition: "all 0.3s ease",
            zIndex: 1,
          }}
          autoFocus
          ref={searchRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      {/* Person Icon Button with Dropdown Menu */}
      <IconButton
        onClick={handlePersonClick}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
        }}
      >
        <PersonIcon />
      </IconButton>
      {/* Dropdown Menu for Person Icon */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{ mt: 2 }}
      >
        {userInfo ? (
          <>
            <MenuItem onClick={handleMyAccountClick}>
              {userInfo.first_name}
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleLoginClick}>Login</MenuItem>
            <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
          </>
        )}
      </Menu>

      {/* CompareArrowsIcon Button */}
      <IconButton
        onClick={handleComparePageClick}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
        }}
      >
        <CompareArrowsIcon />
      </IconButton>

      {/* FavoriteBorderIcon Button */}
      <IconButton
        onClick={handleWishlistPageClick}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>

      {/* AddCardIcon Button */}
      <IconButton
        onClick={handleCartPageClick}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
        }}
      >
        <Badge badgeContent={cartCount} color="secondary">
          <AddCardIcon />
        </Badge>
      </IconButton>

      {/* Dropdown Menu for Additional Icons */}
      <Menu
        anchorEl={additionalAnchorEl}
        open={Boolean(additionalAnchorEl)}
        onClose={handleCloseAdditionalMenu}
        sx={{ mt: 2 }}
      >
        <MenuItem onClick={handleComparePageClick}>Compare</MenuItem>
        <MenuItem onClick={handleWishlistPageClick}>Wishlist</MenuItem>
        <MenuItem onClick={handleCartPageClick}>Cart</MenuItem>
      </Menu>
    </Box>
  );
};

export default SingleButton;
