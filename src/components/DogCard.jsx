import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const defaultDogBreed = "bullterrier";

const dogImageUrl =
  "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4972.jpg";


export default function DogCard({ url, alt, text }) {

  
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia component="img" height={300} image={url? url : dogImageUrl} alt={alt} />
      <CardContent>
        <Typography variant="h2" component="div">
          {text? text : defaultDogBreed}
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
