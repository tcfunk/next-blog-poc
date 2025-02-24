import { DrupalNode } from "next-drupal"

export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

export function getNodeImageUrl(node: DrupalNode) {
  if (node.field_image?.field_media_image) {
    return node.field_image.field_media_image.uri.url
  } else {
    return node.field_image.uri.url
  }
}

export function getNodeImageAlt(node: DrupalNode) {
  if (node.field_image?.field_media_image) {
    return node.field_image.field_media_image.resourceIdObjMeta.alt
  } else {
    return node.field_image.resourceIdObjMeta.alt
  }
}

export function getNodeImageTitle(node: DrupalNode) {
  if (node.field_image?.field_media_image) {
    return node.field_image.field_media_image.resourceIdObjMeta.title
  } else {
    return node.field_image.resourceIdObjMeta.title
  }
}
