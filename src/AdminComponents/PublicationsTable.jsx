import React from 'react';
import {
    Box,
    Chip,
    Paper,
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    IconButton,
    Typography,
    TableContainer,
    TablePagination,
    Stack,
    Skeleton,
} from "@mui/material";
import {
    CheckCircle,
    ArrowUpward,
    ArrowDownward,
    Help as HelpIcon,
    Book as BookIcon,
    MoreVert as MoreVertIcon,
    Article as ArticleIcon,
    Schedule as ScheduleIcon,
    Description as DescriptionIcon,
    RadioButtonUnchecked as RadioButtonUncheckedIcon,
    RemoveRedEye as RemoveRedEyeIcon,
    Download as DownloadIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";

const getStatusIcon = (status) => {
    switch (status) {
        case "Published":
            return <CheckCircle sx={{ color: "success.main", fontSize: 20 }} />;
        case "Unpublished":
            return (
                <RadioButtonUncheckedIcon
                    sx={{ color: "warning.main", fontSize: 20 }}
                />
            );
        case "Under Review":
            return <ScheduleIcon sx={{ color: "info.main", fontSize: 20 }} />;
        case "In Progress":
            return <ScheduleIcon sx={{ color: "primary.main", fontSize: 20 }} />;
        default:
            return <HelpIcon sx={{ color: "text.secondary", fontSize: 20 }} />;
    }
};

const getTypeColor = (type) => {
    switch (type) {
        case "HR Compliances":
            return "primary";
        case "Annual Reports":
            return "secondary";
        case "Policies":
            return "success";
        default:
            return "default";
    }
};

const getTypeIcon = (type) => {
    switch (type) {
        case "HR Compliances":
            return <BookIcon sx={{ fontSize: 16 }} />;
        case "Annual Reports":
            return <DescriptionIcon sx={{ fontSize: 16 }} />;
        case "Policies":
            return <ArticleIcon sx={{ fontSize: 16 }} />;
        default:
            return <ArticleIcon sx={{ fontSize: 16 }} />;
    }
};

const PublicationsTable = ({
    paginatedPublications,
    filteredPublications,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    isLoading,
    handleDeleteClick,
    loading
}) => {
    return (
        <Paper
            sx={{
                borderRadius: 4,
                overflow: "hidden",
                background: (t) =>
                    t.palette.mode === "dark"
                        ? "linear-gradient(135deg, #0f1629 0%, #1a2332 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                border: (t) =>
                    t.palette.mode === "dark"
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid rgba(0,0,0,0.08)",
                boxShadow: (t) =>
                    t.palette.mode === "dark"
                        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                        : "0 8px 32px rgba(0, 0, 0, 0.08)",
            }}
        >
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow
                            sx={{
                                background: (t) =>
                                    t.palette.mode === "dark"
                                        ? "rgba(255,255,255,0.05)"
                                        : "rgba(0,0,0,0.02)",
                                "& th": {
                                    borderBottom: "2px solid",
                                    borderColor: (t) =>
                                        t.palette.mode === "dark"
                                            ? "rgba(255,255,255,0.1)"
                                            : "rgba(0,0,0,0.08)",
                                },
                            }}
                        >
                            <TableCell>S.No</TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                Title
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                Type
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                Status
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                Preview
                            </TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            // Skeleton loading rows
                            [...Array(5)].map((_, index) => (
                                <TableRow key={`skeleton-${index}`}>
                                    <TableCell>
                                        <Skeleton variant="text" width={30} />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="text" width={200} />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="rounded" width={100} height={32} />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="rounded" width={120} height={40} />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="rounded" width={50} height={50} sx={{ borderRadius: 1 }} />
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <Skeleton variant="circular" width={32} height={32} />
                                            <Skeleton variant="circular" width={32} height={32} />
                                            <Skeleton variant="circular" width={32} height={32} />
                                            <Skeleton variant="circular" width={32} height={32} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            paginatedPublications.map((pub, index) => (
                                <TableRow
                                    key={pub.id}
                                    hover
                                    sx={{
                                        transition: "all 0.2s ease-in-out",
                                        "&:hover": {
                                            background: (t) =>
                                                t.palette.mode === "dark"
                                                    ? "rgba(255,255,255,0.05)"
                                                    : "rgba(0,0,0,0.02)",
                                            transform: "scale(1.01)",
                                        },
                                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                                        "@keyframes fadeInUp": {
                                            "0%": {
                                                opacity: 0,
                                                transform: "translateY(20px)",
                                            },
                                            "100%": {
                                                opacity: 1,
                                                transform: "translateY(0)",
                                            },
                                        },
                                    }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <Typography variant="body2" sx={{ maxWidth: 300, fontWeight: 500 }}>
                                            {pub.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            icon={getTypeIcon(pub.type)}
                                            label={pub.type}
                                            size="small"
                                            color={getTypeColor(pub.type)}
                                            sx={{
                                                borderRadius: 2,
                                                fontWeight: 600,
                                                "& .MuiChip-icon": {
                                                    color: "inherit",
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                p: 1,
                                                borderRadius: 2,
                                                background: (t) =>
                                                    t.palette.mode === "dark"
                                                        ? "rgba(255,255,255,0.05)"
                                                        : "rgba(0,0,0,0.02)",
                                            }}
                                        >
                                            {getStatusIcon(pub.status)}
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {pub.status}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {pub.thumbnail ? (
                                            <Box
                                                component="img"
                                                src={`${import.meta.env.VITE_API_BASE_URL}/${pub.thumbnail}`}
                                                alt={pub.title}
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 1,
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <Typography variant="body2" color="text.secondary">
                                                No Preview
                                            </Typography>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={() => window.open(`${import.meta.env.VITE_API_BASE_URL}/${pub.pdfFile}`, '_blank')}
                                                sx={{
                                                    background: (t) =>
                                                        t.palette.mode === "dark"
                                                            ? "rgba(255,255,255,0.05)"
                                                            : "rgba(0,0,0,0.02)",
                                                }}
                                            >
                                                <RemoveRedEyeIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={() => {
                                                    const link = document.createElement('a');
                                                    link.href = `${import.meta.env.VITE_API_BASE_URL}/${pub.pdfFile}`;
                                                    link.download = pub.title;
                                                    document.body.appendChild(link);
                                                    link.click();
                                                    document.body.removeChild(link);
                                                }}
                                                sx={{
                                                    background: (t) =>
                                                        t.palette.mode === "dark"
                                                            ? "rgba(255,255,255,0.05)"
                                                            : "rgba(0,0,0,0.02)",
                                                }}
                                            >
                                                <DownloadIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="warning"
                                                sx={{
                                                    background: (t) =>
                                                        t.palette.mode === "dark"
                                                            ? "rgba(255,255,255,0.05)"
                                                            : "rgba(0,0,0,0.02)",
                                                }}
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => handleDeleteClick(pub)}
                                                disabled={loading}
                                                sx={{
                                                    background: (t) =>
                                                        t.palette.mode === "dark"
                                                            ? "rgba(255,255,255,0.05)"
                                                            : "rgba(0,0,0,0.02)",
                                                }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredPublications.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Rows per page"
                sx={{
                    borderTop: 1,
                    borderColor: (t) =>
                        t.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.08)",
                    background: (t) =>
                        t.palette.mode === "dark"
                            ? "rgba(255,255,255,0.02)"
                            : "rgba(0,0,0,0.01)",
                }}
            />
        </Paper>
    );
};

export default PublicationsTable;