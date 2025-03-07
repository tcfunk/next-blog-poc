import Image from "next/image"
import { absoluteUrl, formatDate, getNodeImageUrl, getNodeImageAlt, getNodeImageTitle  } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"
import { Body } from "@/components/content/body"
interface ArticleProps {
  node: DrupalNode
}

export function Article({ node, ...props }: ArticleProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure>
          <Image
            src={absoluteUrl(getNodeImageUrl(node))}
            width={768}
            height={400}
            alt={getNodeImageAlt(node) || ""}
            priority
          />
          {getNodeImageTitle(node) && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {getNodeImageTitle(node)}
            </figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <Body value={node.body?.processed} className="mt-6 font-serif text-xl leading-loose prose" />
      )}
    </article>
  )
}
