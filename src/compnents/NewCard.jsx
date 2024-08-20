import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function NewCard({title,description,URL,path}) {
    return (
        <Card className="w-full max-w-[60rem] max-h-[100rem] flex-col sm:flex-row aspect-w-16 aspect-h-9 bg-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full sm:w-2/5 shrink-0 rounded-b-none sm:rounded-r-none bg-none"
        >
          <img
            src={URL}
            className="h-full w-full object-cover"
            alt="Card image"
          />
        </CardHeader>
        <CardBody className="p-4 bg-[darkcyan] text-[#A3C6C4]">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {description}
          </Typography>
          <a href={path} className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-dark bg-light hover:bg-dark hover:text-light">
              Live Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }
  