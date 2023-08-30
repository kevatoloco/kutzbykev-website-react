import "./Gallery.css";
import CuratorWidget from "./CuratorWidget";

function Gallery() {
  return (
    <div className="gallery">
      <CuratorWidget feedId="3618d5f9-000e-448a-bd8b-9c702e4f83de" />
      <div className="gallery-buttons">
        <button class="button-58" role="button">
          VIEW FULL GALLERY
        </button>
      </div>
    </div>
  );
}

export default Gallery;
