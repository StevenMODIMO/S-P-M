"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import Link from "next/link";

interface GithubUserData {
  name: string;
  followers: number;
  created_at: string;
  avatar_url: string;
  public_repos: number;
  html_url: string;
}

export default function Github() {
  const [data, setData] = useState<GithubUserData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUserInfo = async () => {
      const response = await fetch("https://api.github.com/users/StevenMODIMO");
      const json = await response.json();

      if (response.ok) {
        setData(json);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    getUserInfo();
  }, []);
  return (
    <main className="text-white p-2 bg-gray-900/90 rounded-sm lg:rounded-lg">
      <section className="flex justify-between p-1">
        <section className="flex flex-col">
          <div className="flex gap-1 items-center">
            <section className="flex gap-1 items-center">
              <FaGithub />
              <h1 className="text-lg font-bold">Github</h1>
            </section>
            {loading ? (
              <div className="h-3 w-10 bg-gray-600/30 animate-pulse rounded-sm"></div>
            ) : (
              <div>
                {data?.created_at && (
                  <p className="text-[10px] font-light">
                    Since {new Date(data.created_at).getFullYear()}
                  </p>
                )}
              </div>
            )}
          </div>
          {loading ? (
            <div className="h-3 w-40 bg-gray-600/30 animate-pulse rounded-sm p-3"></div>
          ) : (
            <div className="font-bold text-lg">{data?.name}</div>
          )}
        </section>
        {loading ? (
          <div className="h-12 w-12 bg-gray-600/30 animate-pulse rounded-full p-3"></div>
        ) : (
          <div>
            {data?.avatar_url && (
              <Image
                src={data?.avatar_url}
                alt="avatar_url"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
          </div>
        )}
      </section>
      <section className="flex gap-1 items-center p-1">
        <IoLinkOutline />
        {loading ? (
          <div className="h-3 w-40 bg-gray-600/30 animate-pulse rounded-sm p-2"></div>
        ) : (
          <div>
            {data?.html_url && (
              <Link href={data.html_url} target="_blank">
                View profile
              </Link>
            )}
          </div>
        )}
      </section>
      <section className="flex gap-1 items-center p-1">
        <FaRegUserCircle />
        {loading ? (
          <div className="h-3 w-40 bg-gray-600/30 animate-pulse rounded-sm p-2"></div>
        ) : (
          <div>{data?.followers} followers</div>
        )}
      </section>
    </main>
  );
}
