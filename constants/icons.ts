import NewsFeedIcon from "@public/icons/news-feed.svg";
import BadgesIcon from "@public/icons/badges.svg";
import EventsIcon from "@public/icons/events.svg";
import GroupsIcon from "@public/icons/groups.svg";
import MembersIcon from "@public/icons/members.svg";
import OverviewIcon from "@public/icons/overview.svg";
import QuestsIcon from "@public/icons/quests.svg";
import StreamsIcon from "@public/icons/strems.svg";
import ForumsIcon from "@public/icons/forums.svg";
import MarketplaceIcon from "@public/icons/marketplace.svg";
import { IconType } from "react-icons";

export const navigationSidebarIcons : NavItemProps[] = [
  { href: "/social/newsfeed", title: "NewsFeed", Icon: NewsFeedIcon },
  { href: "/social/overview", title: "Overview", Icon: OverviewIcon },
  { href: "/social/groups", title: "Groups", Icon: GroupsIcon },
  { href: "/social/members", title: "Members", Icon: MembersIcon },
  { href: "/social/badges", title: "Badges", Icon: BadgesIcon },
  { href: "/social/quests", title: "Quests", Icon: QuestsIcon },
  { href: "/social/streams", title: "Strems", Icon: StreamsIcon },
  { href: "/social/events", title: "Events", Icon: EventsIcon },
  { href: "/social/forums", title: "forums", Icon: ForumsIcon },
  { href: "/social/marketplace", title: "marketplace", Icon: MarketplaceIcon },
];

export interface NavItemProps {
  href: string;
  title: string;
  Icon: IconType;
}
