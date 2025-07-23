import "../listPage/listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function AllPropertiesPage() {
  const { currentUser } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await api.get("/posts");
        setProperties(res.data);
      } catch (err) {
        setError("Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, [currentUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredProperties = properties.filter((post) => post.userId !== currentUser?.id);

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <button
            style={{
              marginBottom: 24,
              padding: "10px 20px",
              background: "#fece51",
              border: "1px solid #fece51",
              borderRadius: 5,
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => navigate("/saved-properties")}
          >
            Show Saved Properties
          </button>
          <Filter />
          {filteredProperties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            filteredProperties.map((post) => <Card key={post.id} item={post} currentUser={currentUser} />)
          )}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={filteredProperties} />
      </div>
    </div>
  );
}

export default AllPropertiesPage; 