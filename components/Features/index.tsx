import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="주요 사업분야"
            paragraph="미래를 위해 폐기물 처리 운반 및 서비스에 전념합니다. 친환경적인 처리와 수집으로 더 나은 미래를 위한 노력을 기울이며, 환경 보호에 앞장서고 있습니다.
                       건설 폐기물부터 지정 폐기물까지 안전하고 규정 준수한 처리로 환경 오염 방지에 최선을 다하며, 환경 존중을 실현하는 전문적인 서비스를 제공합니다."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
