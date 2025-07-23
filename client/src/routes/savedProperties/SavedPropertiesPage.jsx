import "../listPage/listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../lib/apiRequest";

function SavedPropertiesPage() {
  const { currentUser } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSavedProperties() {
      try {
        const res = await api.get("/users/profilePosts");
        setProperties(res.data.savedPosts || []);
      } catch (err) {
        setError("Failed to fetch saved properties");
      } finally {
        setLoading(false);
      }
    }
    fetchSavedProperties();
  }, [currentUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <h1 style={{ marginBottom: 24 }}>Saved Properties</h1>
          <Filter />
          {properties.length === 0 ? (
            <p>No saved properties found.</p>
          ) : (
            properties.map((post) => <Card key={post.id} item={post} currentUser={currentUser} />)
          )}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={properties} />
      </div>
    </div>
  );
}

export default SavedPropertiesPage; 