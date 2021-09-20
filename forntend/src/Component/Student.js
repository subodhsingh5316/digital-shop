import React from 'react'
import { Row, Card } from 'react-bootstrap'

function Student() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    return (
        <div>
            <Row>
                {
                    arr.map((item) => (
                        <Card border="success" style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Success Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </div>
    )
}

export default Student
