import React from 'react';
import { useState, useEffect } from 'react';
// import arrow_right from '../assets/images/arrow-right.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BrandSelect from '../components/BrandSelect';
import TypeSelect from '../components/TypeSelect';
import { catalogService } from '../services';

function CatalogPage() {
  const [catalogs, setCatalogs] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    loadCatalogs();
  }, []);

  function loadCatalogs() {
    catalogService.getAll()
      .then((data) => {
        console.log("dasta:", data);
        console.log("results:", data.data);

        setCatalogs(data.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
    <section className="esh-catalog-filters">
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <TypeSelect />
            </Grid>
            <Grid item xs={6} md={3}>
              <BrandSelect />
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
    <div className="container">
      <div className="esh-catalog-items row">
        { catalogs.length > 0 && catalogs.map((catalog, index) => (
          <div key={index} className="esh-catalog-item col-md-4">
            {/* <img className="esh-catalog-thumbnail" src=""/> */}
            <Button>
              [ ADD TO CART ]
            </Button>

            <div className="esh-catalog-name">
              <span>{catalog.name}</span>
            </div>
            <div className="esh-catalog-price">
              <span>{catalog.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export { CatalogPage };