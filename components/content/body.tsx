import { Element } from "domhandler";
import { HTMLReactParserOptions } from "html-react-parser";
import parse from "html-react-parser";
import Image from "next/image";

const options: HTMLReactParserOptions = {
  replace: (node) => {
    if (node.type === "tag" && node.name === "img") {
      const { src, alt, width, height } = node.attribs;
      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
          alt={alt}
          width={parseInt(width)}
          height={parseInt(height)}
          layout="intrinsic"
          objectFit="cover"
        />
      )
    }
  },
}

export function Body({ value, className }: { value: string, className?: string }) {
  return <div className={className}>{parse(value, options)}</div>
}
