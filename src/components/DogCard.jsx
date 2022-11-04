import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DogCard({ url, alt, text }) {
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia component="img" height={300} image={url} alt={alt} />
      <CardContent>
        <Typography variant="h2" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

DogCard.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
