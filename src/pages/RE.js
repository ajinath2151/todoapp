import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import bi from "../images/building.png";
import Pagination from '@material-ui/lab/Pagination';
// import { FaHeart } from 'react-icons/fa';
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'; optional for above two import
import DeleteIcon from "@material-ui/icons/Delete";
// import DeleteIcon from '@material-ui/icons/Apps';
import { AppsSharp } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import BathtubIcon from '@material-ui/icons/Bathtub';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import KingBedIcon from '@material-ui/icons/KingBed';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png';
import image4 from '../images/img4.png';
import image5 from '../images/img5.png';
import image6 from '../images/img6.png';
import mapimg from '../images/map.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 51),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function RE() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>

    // <DeleteForeverIcon />
  );

  return (
    <div className={classes.grow="m-4"}>
      <AppBar position="static">
        <Toolbar>
          <img src={bi} alt="buliding image" height={70} />
          <Typography className={classes.title} variant="h6" noWrap>
            &nbsp;&nbsp; Real <br /> &nbsp;&nbsp;Estate
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="City, Neighborhood, Address, School, ZIP, Agent, ID"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button style={{ color: 'white' }}>Buy  {'\u00A0'}{'\u00A0'} |</Button>
            <Button style={{ color: 'white' }}>Sell {'\u00A0'}{'\u00A0'} |</Button>
            <Button style={{ color: 'white' }}>Rent {'\u00A0'}{'\u00A0'} |</Button>
            {/* email and notificaiton badge */}
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            &nbsp;&nbsp;&nbsp;
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <AppsSharp />
              &nbsp;&nbsp;&nbsp;
              <MenuIcon />
            </IconButton>
            {/* <FaHeart /> */}
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {/* <DeleteIcon /> */}
          {/* <AppsSharp /> */}
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className=" m-4">
        <Grid item xs={6}>
          <div className="d-flex justify-content-between">
            <h5><span style={{ "  text-decoration-thickness": " 20px;", "text-decoration": "underline", "text-decoration-color": "#f5d742", "text-underline-offset": "15px" }}>Explore</span> <b>This Neighborhood</b></h5>
            <h6 className="badge p-2" style={{ background: "#242e40" }}>Know More Insights</h6>
          </div>
          <hr />
          <div className="d-flex justify-content-between flex-wrap">
            {[{price:'4,20,00,000', image:image1, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"},
              {price:'2,66,00,000', image:image2, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"},  
              {price:'1,60,00,000', image:image3, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"},
              {price:'1,60,00,000', image:image4, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"},
              {price:'72,00,000', image:image5, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"},
              {price:'88,80,000', image:image6, desc:"23,Indrapurma,16th Street,Greenwich Colony,Domlur,Bangaluru"}
          ].map((value, index) => (
              <Card className={classes.root} style={{ width: "48%", marginBottom: "30px", borderRadius: "5%", }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={value.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>₹{value.price}</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">                      
                      {value.desc}
                    </Typography>
                  </CardContent>
                  <hr style={{ width: "70%", margin: "auto" }} />
                </CardActionArea>
                <CardActions>
                  <div className="d-flex" style={{ marginLeft: "30px" }}>
                    <div className="d-block">
                      <KingBedIcon fontSize="large" className="m-3" />
                      <p>2 Beds</p>
                    </div>
                    <div style={{ borderLeft: " 1px solid #f5d742", height: "auto", padding: "5px" }}></div>
                    <div className="d-block">
                      <BathtubIcon fontSize="large" className="m-3" />
                      <p>2 Bath</p>
                    </div>
                    <div style={{ borderLeft: " 1px solid #f5d742", height: "auto", padding: "5px" }}></div>
                    <div className="d-block">
                      <AspectRatioIcon className="m-3" fontSize="large" />
                      <p>100000 Sqft</p>
                    </div>
                  </div>
                </CardActions>
              </Card>
            ))

            }
          </div>
          <div className="d-flex justify-content-center">
            <Pagination count={8} hidePrevButton hideNextButton size="large" />
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ background: "#030517", height: "60px" }}>
            <ArrowRightIcon fontSize="large" style={{ color: "#f5d742" }} />
            <p className="text-white mt-3">Uttar Pradesh</p>
            <ArrowRightIcon fontSize="large" style={{ color: "#f5d742" }} />
            <p className="text-white mt-3">Noida</p>
            <ArrowRightIcon fontSize="large"  style={{ color: "#f5d742" }} />
            <p className="text-white mt-3">Sec-72</p>
          </div>
          <h1 className="mt-4"><span style={{ " text-decoration-thickness": " 20px;", "text-decoration": "underline", "text-decoration-color": "#f5d742", "text-underline-offset": "15px" }}>Homes</span>for sale near Noida</h1>
          <TableContainer component={Paper} className="mt-5">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3 style={{ " text-decoration-thickness": " 30px;", "text-decoration": "underline", "text-decoration-color": "#f5d742", "text-underline-offset": "15px" }}><b>Neighborhood</b></h3></TableCell>
            <TableCell align="left"><h3 style={{ " text-decoration-thickness": " 30px;", "text-decoration": "underline", "text-decoration-color": "#f5d742", "text-underline-offset": "15px" }}><b>Cities</b></h3></TableCell>
            <TableCell align="left"><h3 style={{ " text-decoration-thickness": " 30px;", "text-decoration": "underline", "text-decoration-color": "#f5d742", "text-underline-offset": "15px" }}><b>Pincode</b></h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow> <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow> <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow> <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow> <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow> <TableRow >
              <TableCell align="left">Sec-70 Noida</TableCell>
              <TableCell align="left">Greater Noida</TableCell>
              <TableCell align="left">201301</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <img src={mapimg} alt="map image" />
        </Grid>
      </Grid>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
