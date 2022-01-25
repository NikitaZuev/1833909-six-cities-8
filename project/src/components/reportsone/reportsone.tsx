import { ListReportList } from '../../types/Card';

type RepProps = {
  rep: ListReportList;
}
function ReportOne(props: RepProps): JSX.Element{
  const {rep} = props;
  const {ReportInfo} = rep;
  const [OneReportInfo] = ReportInfo;

  return(
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={OneReportInfo.avatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {OneReportInfo.username}
        </span>
        <span className="property__user-status">
          {OneReportInfo.userstatus}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {OneReportInfo.text}
        </p>
      </div>
    </div>
  );
}

export default ReportOne;
