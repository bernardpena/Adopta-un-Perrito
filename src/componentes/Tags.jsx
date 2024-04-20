import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const tags = [
    {
        id: 1,
        text: "Husky",
        color: "success"
    },
    {
        id: 2,
        text: "Labrador Retriever",
        color: "Primary"
    },
    {
        id: 3,
        text: "Golden Retriever",
        color: "Danger"
    },
    {
        id: 4,
        text: "French Bulldog",
        color: "Warning"
    }
]

export default function Tags() {
    return (
        <Stack direction="horizontal" gap={2}>
            <Badge bg="primary">Primary</Badge>
            <Badge bg="secondary">Secondary</Badge>
            <Badge bg="success">Success</Badge>
            <Badge bg="danger">Danger</Badge>
            <Badge bg="warning" text="dark">
                Warning
            </Badge>
            <Badge bg="info">Info</Badge>
            <Badge bg="light" text="dark">
                Light
            </Badge>
            <Badge bg="dark">Dark</Badge>
        </Stack>
    );
}
