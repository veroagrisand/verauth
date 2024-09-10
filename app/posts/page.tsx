import React from "react";
import { Card, CardBody, CardFooter, Avatar, Button, CardHeader } from "@nextui-org/react";
import FooterUser from "../components/FooterUser";

const base__url = "https://jsonplaceholder.typicode.com/posts";
interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = async () => {
  const response = await fetch(base__url, {
    next: { revalidate: 3600 }, //cronjob
  });
  const posts: Iposts[] = await response.json();
  return (
    <>
      <div className="mx-40 mt-2 my-20">
        <div className="grid grid-cols-4 md:grid-cols-3 gap-2">
          {posts.map((post) => {
            return (
              <>
                <Card className="max-w-md rounded-lg shadow-md" key={post.id}>
                  <CardHeader className="text-center font-bold">{post.title}</CardHeader>
                  <CardBody className="text-sm text-gray-600">{post.body}</CardBody>
                  <CardFooter className="text-sm text-gray-600">
                    <p className="text-default-500">Posted by userId {post.id}</p>
                  </CardFooter>
                </Card>
                <FooterUser />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostPage;