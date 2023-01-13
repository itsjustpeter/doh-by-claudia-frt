import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useMainView } from "./useMainView";
import Map from "../components/map/Map";
import CircularProgress from "@mui/material/CircularProgress";

export const MainView = () => {
  const { placeState, pageState, mapState, populationState, roadState } =
    useMainView();

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.content}>
          <Typography
            fontWeight={600}
            color={"black"}
            fontSize={"1.15vw"}
            mb="12px"
          >
            궁금한 지역을 누르면 자세한 정보를 볼 수 있어요
          </Typography>
          <div css={sx.wrapper}>
            {placeState.list?.map((it, index) => (
              <Item
                key={index}
                name={it.AREA_NM}
                backgroundColor={
                  populationState.fetchState.isRefetching
                    ? "white"
                    : populationState.dataState.color
                }
                isLoading={populationState.fetchState.isLoading}
                isClicked={it.AREA_NM == placeState.name}
                onClick={() => placeState.onItemChange(it)}
              />
            ))}
          </div>
        </div>

        {placeState.name !== null && placeState.name !== undefined && (
          <div css={sx.sidebar}>
            <div css={sx.title}>
              {populationState.fetchState.isLoading ||
              populationState.fetchState.isRefetching ? (
                "-"
              ) : (
                <Typography
                  fontSize={"1.15vw"}
                  fontWeight={700}
                >{`${populationState.dataState.time} 기준`}</Typography>
              )}

              <div css={sx.icon}>
                <IconButton onClick={pageState.refresh}>
                  <RefreshIcon />
                </IconButton>
                <IconButton onClick={placeState.onItemReset}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <Typography>{placeState.currPlace?.AREA_NM}</Typography>
            <div css={sx.box0}>
              <Map
                latitude={mapState.latitude}
                longitude={mapState.longtitude}
              />
            </div>
            <div css={sx.boxWrapper}>
              <div css={sx.box}>
                {populationState.fetchState.isLoading ||
                populationState.fetchState.isRefetching ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <div css={sx.box1Wrapper}>
                    <p css={sx.dencityText}>
                      인구혼잡도가{" "}
                      <span
                        css={sx.dencityColor(populationState.dataState.color)}
                      >
                        {populationState.dataState.dencity}
                      </span>{" "}
                      입니다
                    </p>
                    <Typography css={sx.dencityDesc}>
                      {populationState.dataState.dencityDesc}
                    </Typography>
                  </div>
                )}
              </div>
            </div>
            <div css={sx.boxWrapper}>
              <div css={sx.box}>
                {roadState.fetchState.isLoading ||
                roadState.fetchState.isRefetching ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <div css={sx.box1Wrapper}>
                    <p css={sx.dencityText}>
                      도로소통현황{" "}
                      <span css={sx.dencityColor(roadState.dataState.color)}>
                        {roadState.dataState.dencity}
                      </span>
                    </p>
                    <Typography css={sx.roadDencityDesc}>
                      {roadState.dataState.dencityDesc}
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `,
  container: css`
    width: 100%;
    height: 80vh;
    max-width: 1240px;
    display: flex;
  `,
  content: css`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  `,
  wrapper: css`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 12px;
  `,

  title: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  icon: css`
    display: flex;
    align-items: center;
  `,
  sidebar: css`
    width: 500px;
    height: 100%;
    background-color: #f3f5f7;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 8px;
  `,
  boxWrapper: css`
    width: 100%;
    flex: 1;
    display: flex;
    align-content: center;
    gap: 12px;
  `,
  box0: css`
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius: 12px;
  `,
  box: css`
    width: 100%;
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,

  item: (isClicked: boolean, backgroundColor: string) => css`
    width: 140px;
    aspect-ratio: 1;
    border: 1px solid #cccccc;
    border-radius: 32px;
    background-color: ${isClicked ? backgroundColor : "white"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    padding: 12px;
    text-align: center;

    &:hover {
      scale: 1.15;
      transition: 0.3s;
    }
  `,

  box1Wrapper: css`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  `,
  dencityText: css`
    font-size: 20px;
  `,
  dencityColor: (color: string) => css`
    color: ${color};
  `,
  dencityDesc: css`
    width: 80%;
    font-size: 16px;
  `,
  roadDencityDesc: css`
    width: 100%;
    font-size: 16px;
  `,
};

type ItemProps = {
  name: string;
  backgroundColor?: string;
  isClicked: boolean;
  isLoading: boolean;
  onClick: () => void;
};

const Item = ({
  name,
  backgroundColor = "white",
  isClicked,
  isLoading,
  onClick,
}: ItemProps) => {
  return (
    <div css={sx.item(isClicked, backgroundColor)} onClick={onClick}>
      {isClicked || <Typography lineHeight={1.2}>{name}</Typography>}
      {isClicked &&
        (isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <FmdGoodIcon sx={{ fill: "#718fd3" }} fontSize={"large"} />
        ))}
    </div>
  );
};
