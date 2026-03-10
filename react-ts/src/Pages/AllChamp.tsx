import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ.ts";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import {Card, Carousel, Col, Container, Row } from "react-bootstrap";


const AllChamp = () => {
  const [champs, setChamps] = useState<Array<Champ>>();

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((res) => setChamps(res.data))
      .catch(() => toast.error("Sikertelen bekérés!"));
  }, []);
  const generateCard = (Champ: Champ) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Carousel>{Champ.images.map((i) => generateCarousel(i))}</Carousel>
          <Card.Body>
            <Card.Title>{Champ.name}</Card.Title>
            <Card.Text>
              Role: {Champ.role}
              <br />
              Lane: {Champ.lane}
              <br />
              Difficulty: {Champ.difficulty}
              <br />
              Blue essence: {Champ.blue_essence}
              <br />
              DamageType: {Champ.damage_type}
              <br />
              Description: {Champ.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  const generateCarousel = (url: string) => {
    return (
      <Carousel.Item>
        <img src={`${baseURL}/images/${url}`} alt="" style={{width: "350px"}} />
      </Carousel.Item>
    );
  };
  return (
    <>
      <Container>
        <Row>{champs?.map((i) => generateCard(i))}</Row>
      </Container>
    </>
  );
};
export default AllChamp;
