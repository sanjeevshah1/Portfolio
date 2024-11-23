// import { link } from "fs";
import { ExternalLink } from "lucide-react";
const SocialCard = ({name,url,description,containerDesign,backgroundGradient,linkDesign} : any) => {
  return (
    // {/* GitHub Card */}
    <div className={containerDesign}>
        <div className={backgroundGradient} />
            <div className="relative">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                {description}
                </p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkDesign}
                >
                Follow <ExternalLink className="w-4 h-4" />
                </a>
            </div>
    </div>
  )
}

export default SocialCard