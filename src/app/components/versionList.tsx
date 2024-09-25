import { useGetPolicyVersionsQuery } from "@/lib/features/policyVersions/policyVersionSlice";
import styles from "../styles/policy-document.module.css";
import VersionPreview from "./versionPreview";

  
  export default function VersionList() {
    const { data, isError, isLoading} =
    useGetPolicyVersionsQuery(null);

    if (isLoading) {
        return (
            <div>
            <h1>Data is loading ...</h1>
            </div>
        );
    }
  
    if (isError || data == null) {
        return (
            <div>
            <h1>There was an error !</h1>
            </div>
        );
    }

    return (
      <div className={styles.previewsContainer}>
        {data
        .slice()
        .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())
        .map((policy) => (
            <VersionPreview
              key={policy.id}
              policy={policy}
            />
          ))}
      </div>
    );
  }