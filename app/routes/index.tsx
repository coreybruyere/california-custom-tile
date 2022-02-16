import cctLogo from "../assets/images/california-custom-tile.svg";
import { Box } from "../components/Box";

// ADD SVGR for SVG: https://www.sanity.io/guides/import-svg-files-in-react
export default function Index() {
  return (
    <Box
      aria-role="document"
      css={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "center",
        paddingTop: "$5",
        paddingLeft: "$3",
        paddingRight: "$3",
      }}
    >
      <Box
        as="img"
        src={cctLogo}
        alt="California custom tile"
        css={{ maxWidth: 280 }}
        width={280}
      />

      <Box
        as="h1"
        css={{
          fontSize: 32,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
        }}
      >
        Website Coming Soon!
      </Box>
    </Box>
  );
}
