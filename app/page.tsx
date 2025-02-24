import { ArticleTeaser } from "@/components/drupal/ArticleTeaser"
import { drupal } from "@/lib/drupal"
import type { Metadata } from "next"
import type { DrupalNode } from "next-drupal"

const media_include = process.env.NEXT_MEDIA_INCLUDE

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
}

// export async function generateStaticParams() {
  // const nodes = await drupal.getResourceCollection<DrupalNode[]>(
  //   "node--article",
  //   {
  //     params: {
  //       "filter[status]": 1,
  //       "fields[node--article]": "title,path,field_image,uid,created",
  //       include: "field_image,uid",
  //       sort: "-created",
  //     },
  //   }
  // )

  // return nodes.map((node) => ({
  //   slug: node.path.split("/").slice(1),
  // }))
// }

export default async function Home() {
  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--article",
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: `${media_include},uid`,
        sort: "-created",
      },
      next: {
        revalidate: 3600,
      },
    }
  )

  return (
    <>
      <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
      {nodes?.length ? (
        nodes.map((node) => (
          <div key={node.id}>
            <ArticleTeaser node={node} />
            <hr className="my-20" />
          </div>
        ))
      ) : (
        <p className="py-4">No nodes found</p>
      )}
    </>
  )
}
