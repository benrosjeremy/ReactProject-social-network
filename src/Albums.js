import React, { useState, useEffect } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});
  const [visiblePhotos, setVisiblePhotos] = useState({});

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        const filteredAlbum = data.filter(album => album.userId === 1);
        setAlbums(filteredAlbum);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const togglePhotos = async (albumId) => {
    if (visiblePhotos[albumId]) {
      setVisiblePhotos((prev) => ({ ...prev, [albumId]: 0 }));
    } else {
      if (!photos[albumId]) {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
          const data = await response.json();
          setPhotos((prev) => ({ ...prev, [albumId]: data }));
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      }
      // Show 10 photos initially
      setVisiblePhotos((prev) => ({ ...prev, [albumId]: 10 }));
    }
  };

  const showMorePhotos = (albumId) => {
    setVisiblePhotos((prev) => ({
      ...prev,
      [albumId]: prev[albumId] + 10,
    }));
  };

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h3>{album.id}. {album.title}</h3>
            <button onClick={() => togglePhotos(album.id)}>
              {visiblePhotos[album.id] ? 'סגור תמונות' : 'הצג תמונות'}
            </button>
            {visiblePhotos[album.id] && (
              <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {photos[album.id]?.slice(0, visiblePhotos[album.id]).map((photo) => (
                    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} style={{ margin: "5px" }} />
                  ))}
                </div>
                {visiblePhotos[album.id] < photos[album.id]?.length && (
                  <button onClick={() => showMorePhotos(album.id)}>המשך</button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
