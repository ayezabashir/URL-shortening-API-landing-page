import SingleLink from "./SingleLink";

const OldLinks = ({ shortLinks }) => {
    return (
        <div className="space-y-4">
            {
                shortLinks.map((link, index) => (
                    <SingleLink key={index} link={link} />
                ))
            }
        </div>
    );
};

export default OldLinks