import { CORE_CONCEPTS } from "../Data";
import CoreConcept from "./CoreConcept";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreItem) => (
          <CoreConcept key={coreItem.title} {...coreItem} />
        ))}
      </ul>
    </section>
  );
}
