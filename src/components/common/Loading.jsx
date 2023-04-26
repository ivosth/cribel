import { CircularProgress } from "@chakra-ui/react";

export default function Loading() {
    return (
        <div className="centerLoading">
            <CircularProgress isIndeterminate size="25rem" />
        </div>
    )
}