"use client"
import React, { useState } from "react";
import { fetchPost } from "../services/fetchPost";
import { useQuery } from "@tanstack/react-query";

const Table = ({ data: initialData }: { data: any[] }) => {
  const [page, setPage] = useState(0);

  // Fetch data using React Query
  const { data, isFetching } = useQuery({
    queryKey: ["pagination-data", page], // Update when page changes
    queryFn: () => fetchPost(page), // Fetch posts for the page
    initialData: initialData, // Initial data for the first render
    placeholderData: (prevData) => prevData || [], // 👈 Replaces `keepPreviousData`
  });

  return (
    <div className="fluid-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserId</th>
            <th scope="col">Post Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <button
        type="button"
        className="btn btn-primary"
        disabled={page === 0 || isFetching}
        onClick={() => setPage((prev) => prev - 1)}
      >
        {isFetching ? "Loading..." : "Prev"}
      </button>

      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={isFetching}
      >
        {isFetching ? "Loading..." : "Next"}
      </button>
    </div>
  );
};

export default Table;
