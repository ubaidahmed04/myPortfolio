import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard() {
  return (
    <Card className="w-full h-auto flex-shrink-0 flex flex-col flex-wrap">
  <CardHeader
    shadow={false}
    floated={false}
    className="bg-blue-gray-100"
  >
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      alt="card-image"
      className="w-full object-cover h-full"
    />
  </CardHeader>
  <CardBody className="bg-[#373737] hover:bg-[#607D8B] cursor-pointer text-cyan-200 flex flex-col justify-between p-4 sm:p-6">
    <div>
      <Typography variant="h6" className="mb-2 uppercase text-xs sm:text-sm md:text-base">
        Project
      </Typography>
      <Typography variant="h4" className="mb-2 text-base sm:text-lg md:text-xl">
        E-Commerce
      </Typography>
      <Typography className="mb-4 text-sm sm:text-base md:text-lg font-normal">
        Like so many organizations these days, Autodesk is a company in
        transition. It was until recently a traditional boxed software company
        selling licenses. Yet its own business model disruption is only part
        of the story.
      </Typography>
    </div>
    <a href="#" className="inline-block">
      <Button variant="text" className="flex boton-elegante items-center gap-2 text-xs sm:text-sm md:text-md">
        Explore
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
